#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
#include <limits>
#include <string>

using namespace std;

// Function to perform Dijkstra's algorithm to find shortest distances from source node
vector<int> dijkstra(const unordered_map<int, unordered_map<int, int>>& graph, int source) {
    vector<int> distances(graph.size(), numeric_limits<int>::max());
    distances[source] = 0;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, source});

    while (!pq.empty()) {
        int current_node = pq.top().second;
        int current_distance = pq.top().first;
        pq.pop();

        if (current_distance > distances[current_node]) {
            continue;
        }

        for (const auto& neighbor : graph.at(current_node)) {
            int next_node = neighbor.first;
            int edge_weight = neighbor.second;
            int distance = current_distance + edge_weight;

            if (distance < distances[next_node]) {
                distances[next_node] = distance;
                pq.push({distance, next_node});
            }
        }
    }

    return distances;
}

// Function to perform iterative path planning considering only selected nodes
vector<int> iterativePathPlanningWithSelectedNodes(const unordered_map<int, unordered_map<int, int>>& graph, int source, int destination, const vector<bool>& selected_nodes) {
    vector<int> path;
    vector<bool> visited(graph.size(), false);
    vector<int> distances = dijkstra(graph, source);
    int current_node = source;

    while (current_node != destination) {
        visited[current_node] = true;
        int min_distance = numeric_limits<int>::max();
        int next_node = -1;

        // Find the unvisited selected node with the shortest distance
        for (const auto& neighbor : graph.at(current_node)) {
            int neighbor_node = neighbor.first;
            if (selected_nodes[neighbor_node] && !visited[neighbor_node] && distances[neighbor_node] < min_distance) {
                min_distance = distances[neighbor_node];
                next_node = neighbor_node;
            }
        }

        if (next_node == -1) {
            // No path to destination
            return {};
        }

        path.push_back(next_node);
        current_node = next_node;
    }

    return path;
}

// Function to take input from the user for selected nodes
vector<bool> getInputSelectedNodes(int num_nodes) {
    vector<bool> selected_nodes(num_nodes, false);
    string input;

    cout << "Enter selected nodes (true/false) for path planning (0-indexed):" << endl;
    for (int i = 0; i < num_nodes; ++i) {
        cout << "Node " << i << ": ";
        cin >> input;
        selected_nodes[i] = (input == "true" || input == "True" || input == "1");
    }

    return selected_nodes;
}

int main() {
    // Example graph represented as an adjacency list
    unordered_map<int, unordered_map<int, int>> graph = {
        {0, {{1, 4}, {2, 2}}},
        {1, {{0, 4}, {2, 5}, {3, 10}}},
        {2, {{0, 2}, {1, 5}, {3, 3}, {4, 6}}},
        {3, {{1, 10}, {2, 3}, {4, 8}, {5, 2}}},
        {4, {{2, 6}, {3, 8}, {5, 6}, {6, 5}}},
        {5, {{3, 2}, {4, 6}, {6, 4}}},
        {6, {{4, 5}, {5, 4}}}
    };

    int num_nodes = graph.size();
    int source = 0;
    int destination = 6;

    vector<bool> selected_nodes = getInputSelectedNodes(num_nodes);

    vector<int> path = iterativePathPlanningWithSelectedNodes(graph, source, destination, selected_nodes);

    if (path.empty()) {
        cout << "No path found from source to destination." << endl;
    } else {
        cout << "Shortest path from " << source << " to " << destination << " (considering selected nodes): ";
        for (int node : path) {
            cout << node << " ";
        }
        cout << endl;
    }

    return 0;
}
