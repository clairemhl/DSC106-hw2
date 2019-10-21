Highcharts.chart('ds_ff',{
    chart:{
        type:'line'
    },
    title:{
        text: "Daily sales data for fish fillet in different regions"
    },
    xAxis:{
        categories:  ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday',
        'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        'Sunday']
    },
    series: [{
                name: 'Northwest',
                data:[ 8446,  7950,  8397,  9537, 10123,  8410, 11791,  8179,  7193,
                    10580, 10091,  9247, 10250, 12264,  7127,  7174,  9313,  8441,
                     9101,  8739, 11108,  6865,  7271,  9887,  9068,  9835, 10656,
                    12027,  7554,  7413, 11201]
            },{
            name: 'Southwest',
            data: [10204,  7316,  8683,  8429, 10085,  9652,  8985, 10985,  7616,
                7105,  9506,  8424,  9316,  8832, 10360,  8140,  7152,  9602,
                8425,  9944,  9787, 11615,  9015,  7722,  9428,  8632,  9102,
                9959, 10941,  7877,  8302]
        },{
            name:'Northwest',
            data:[ 9924,  9028,  8105,  8034,  9879,  9360,  8834, 10639,  8589,
                7702,  8566,  8555,  9872,  8617, 10503,  8543,  7177,  9107,
                8765,  9474,  9876, 10598,  8058,  7680,  8892,  7952,  8609,
                9768, 10364,  8465,  8369]
        },{
            name: 'Southeast',
            data:[11734,  8005,  7011,  8201,  8874,  9674,  8370, 11630,  6890,
                7520,  9312,  7735,  8416,  8826, 11533,  8346,  7647,  8793,
                8436,  8426,  8637, 11709,  8189,  7167,  8545,  8565,  8954,
                9376, 12241,  7727,  7269]
        },{
            name: 'Central',
            data:[11232,  9152,  8406,  7940,  8607, 10228,  8993, 12463,  6799,
                7583,  9037,  8418,  9279,  7804, 11764,  9431,  7112,  9250,
                7773,  8276,  9376, 12847,  8713,  6881,  9227,  9194,  8185,
               10200, 12377,  7632,  7440]
        }]
    })