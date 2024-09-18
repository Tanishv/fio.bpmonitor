export const scoreDescriptions: { [key: string]: string } = {
    has_bp_json: "bp.json could be discovered",
    reports_query_node: "bp.json contained query node",
    reports_latest_version: "call to query node revealed latest version of API node",
    reports_producer_node: "bp.json contained producer node",
    reports_seed_node: "bp.json contained seed node",
    runs_api_node: "call to query node was successful",
    runs_history_node: "call to query V1 History node was successful",
    runs_hyperion_node: "call to query V2 History node was successful",
    results_a: "<a href='https://github.com/fioprotocol/fio.bpmonitor/blob/bb2f723b6bbd7d16694884c01e038e7a4eb4d85c/src/services/nodeService.ts#L225'>API query</a> result count in 75th percentile",
    results_b: "<a href='https://github.com/fioprotocol/fio.bpmonitor/blob/bb2f723b6bbd7d16694884c01e038e7a4eb4d85c/src/services/nodeService.ts#L225'>API query</a> result count in 50th percentile",
    results_c: "<a href='https://github.com/fioprotocol/fio.bpmonitor/blob/bb2f723b6bbd7d16694884c01e038e7a4eb4d85c/src/services/nodeService.ts#L225'>API query</a> result count in 25th percentile",
    fee_votes: "<a href='https://dev.fio.net/docs/setting-fees#setting-fees'>Votes on fees</a>",
    fee_voted_recently: "<a href='https://dev.fio.net/docs/setting-fees#setting-fees'>Votes on fees</a> in last 30 days",
    bundle_votes: "<a href='https://dev.fio.net/docs/setting-fees#setting-bundled-transactions'>Votes on bundles</a>",
    signs_msigs: "Signs msigs",
    signs_msigs_quickly: "Signs msigs in 7 days or less",
    runs_tools: "Runs <a href='https://github.com/fioprotocol/fio.bpmonitor/blob/master/bptools.md'>tools for community</a>",
    participates_in_testnet: "For Mainnet BPs, if they have a <a href='https://github.com/fioprotocol/fio.bpmonitor/blob/master/bpchainmap.md'>mapped Testnet BP</a>, the score of that BP is represented."
};