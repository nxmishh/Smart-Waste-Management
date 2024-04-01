import React from 'react';

class ShortestPathComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shortestPath: ""
        };
    }

    componentDidMount() {
        this.computeShortestPath();
    }

    computeShortestPath() {
        const graph = [
            { 1: 4, 2: 2 },
            { 0: 4, 2: 5, 3: 10 },
            { 0: 2, 1: 5, 3: 3, 4: 6 },
            { 1: 10, 2: 3, 4: 8, 5: 2 },
            { 2: 6, 3: 8, 5: 6, 6: 5 },
            { 3: 2, 4: 6, 6: 4 },
            { 4: 5, 5: 4 }
        ];

        const source = 0;
        const destination = 6;

        const selectedNodes = [true, true, true, true, true, true, true];

        const path = this.iterativePathPlanningWithSelectedNodes(graph, source, destination, selectedNodes);

        if (path.length === 0) {
            this.setState({ shortestPath: `No path found from source to destination.` });
        } else {
            this.setState({ shortestPath: `Shortest path from ${source} to ${destination} (considering selected nodes): ${path.join(" ")}` });
        }
    }

    iterativePathPlanningWithSelectedNodes(graph, source, destination, selectedNodes) {
        const path = [];
        const visited = Array(graph.length).fill(false);
        const distances = this.dijkstra(graph, source);
        let currentNode = source;

        while (currentNode !== destination) {
            visited[currentNode] = true;
            let minDistance = Number.MAX_SAFE_INTEGER;
            let nextNode = -1;

            for (const [neighborNode, edgeWeight] of Object.entries(graph[currentNode])) {
                if (selectedNodes[neighborNode] && !visited[neighborNode] && distances[neighborNode] < minDistance) {
                    minDistance = distances[neighborNode];
                    nextNode = parseInt(neighborNode);
                }
            }

            if (nextNode === -1) {
                return [];
            }

            path.push(nextNode);
            currentNode = nextNode;
        }

        return path;
    }

    dijkstra(graph, source) {
        const distances = Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
        distances[source] = 0;
        const pq = [{ distance: 0, node: source }];

        while (pq.length > 0) {
            const { distance: currentDistance, node: currentNode } = pq.shift();

            if (currentDistance > distances[currentNode]) {
                continue;
            }

            for (const [nextNode, edgeWeight] of Object.entries(graph[currentNode])) {
                const distance = currentDistance + edgeWeight;

                if (distance < distances[nextNode]) {
                    distances[nextNode] = distance;
                    pq.push({ distance, node: parseInt(nextNode) });
                    pq.sort((a, b) => a.distance - b.distance);
                }
            }
        }

        return distances;
    }

    render() {
        return (
            <div>
                {this.state.shortestPath}
            </div>
        );
    }
}

export default ShortestPathComponent;
