Highcharts.chart('ds_hm',{
    chart:{
        type:'line'
    },
    title:{
        text: "Daily sales data for hamburger in different region"
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
                data:[37240, 36258, 37007, 37590, 38036, 38187, 38095, 34685, 35059,
                    36906, 36893, 37243, 37476, 37977, 36130, 35147, 38330, 35629,
                    38094, 34610, 35293, 35862, 38019, 38460, 37295, 35164, 36414,
                    35179, 38474, 37323, 36880]
            },{
            name: 'Southwest',
            data: [39249, 38106, 35494, 33666, 33528, 33608, 33007, 38964, 33637,
                39361, 35750, 35040, 35242, 36682, 38272, 36955, 36046, 37242,
                35703, 38221, 38971, 37796, 35544, 36372, 33006, 38405, 38709,
                35194, 34861, 35504, 36430]
        },{
            name:'Northwest',
            data:[37271, 35021, 35369, 37993, 37854, 36343, 35901, 36279, 38059,
                35332, 37802, 36105, 38015, 36866, 35068, 34234, 35821, 36945,
                33663, 35313, 34489, 37919, 33703, 33234, 36311, 37012, 35904,
                34396, 34071, 35644, 33681]
        },{
            name: 'Southeast',
            data:[37271, 35021, 35369, 37993, 37854, 36343, 35901, 36279, 38059,
                35332, 37802, 36105, 38015, 36866, 35068, 34234, 35821, 36945,
                33663, 35313, 34489, 37919, 33703, 33234, 36311, 37012, 35904,
                34396, 34071, 35644, 33681]
        },{
            name: 'Central',
            data:[35689, 37178, 35855, 36168, 36837, 37790, 36061, 34898, 37192,
                35334, 37905, 35045, 34532, 36526, 37012, 36274, 36386, 36938,
                36811, 35951, 37177, 37222, 35494, 36777, 37700, 37465, 36245,
                35524, 35109, 36614, 34767]
        }]
    })