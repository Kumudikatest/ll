module.exports = function() {
    this.clusters = [];

    this.clusters[""] = {
        host: process.env.EndPoint_redis,
        port: 6379,
        clusterModeEnabled: false
    };
};