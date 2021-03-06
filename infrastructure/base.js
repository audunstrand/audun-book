var baseConfig = {
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    addons: {mongolab: {plan: 'mongolab:sandbox'}},
    collaborators: ['audunstrand@gmail.com', 'thor.henrichsen@gmail.com'],
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: false},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false}
    },
    log_drains: ['syslog://data.logentries.com:13636'],
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: [],
}
module.exports = baseConfig;