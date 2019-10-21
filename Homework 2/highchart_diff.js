Highcharts.chart('diff',{
    chart:{
        type:'line'
    },
    title:{
        text: "Sales growth rate over the period"
    },
    xAxis:{
        categories: ['Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16',
        'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16',
        'Jan-17', 'Feb-17', 'Mar-17', 'Apr-17', 'May-17', 'Jun-17',
        'Jul-17', 'Aug-17', 'Sep-17', 'Oct-17', 'Nov-17', 'Dec-17',
        'Jan-18', 'Feb-18', 'Mar-18', 'Apr-18', 'May-18', 'Jun-18',
        'Jul-18', 'Aug-18', 'Sep-18', 'Oct-18', 'Nov-18', 'Dec-18',
        'Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19',
        'Jul-19', 'Aug-19', 'Sep-19']
    },
    series: [{
        name: 'Hamburber',
        data: [ 0.04314649,  0.01193262, -0.01864397,  0.04839755, -0.00399628,
            0.01771187,  0.06069566, -0.02364511, -0.00611307,  0.0230741 ,
           -0.0231375 ,  0.05452584,  0.06988091, -0.04683487,  0.00670786,
            0.01462577,  0.02921615, -0.04558428,  0.0960477 , -0.01933214,
           -0.02483841,  0.05286327,  0.02098728,  0.02335135,  0.01299038,
           -0.04204085,  0.0382843 ,  0.03007807, -0.0680004 ,  0.05017252,
            0.0059573 , -0.01703781, -0.14409925,  0.08924157, -0.05847177,
            0.08829599, -0.02884366, -0.01121825,  0.00688544,  0.04140402,
           -0.0651706 , -0.02354434,  0.03366937, -0.00664751]
        }, {
        name: 'Chicken Fillet',
        data: [ 0.01773346,  0.02817208, -0.00248797,  0.03167256, -0.01155516,
            0.01721131,  0.06923611, -0.03885679,  0.01758803,  0.03185401,
           -0.05436744,  0.08033344,  0.03679213, -0.00844117, -0.02528968,
            0.02290909,  0.02910201, -0.00601602,  0.07770791, -0.03454077,
           -0.02486435,  0.03647284,  0.02904356,  0.01520916,  0.02909204,
           -0.0568048 ,  0.04631638,  0.04667674, -0.05282867,  0.0251542 ,
            0.03850961, -0.04038193, -0.13981901,  0.0664894 , -0.05839668,
            0.08849962, -0.02137147, -0.01895077,  0.02317661,  0.03316394,
           -0.07978048, -0.02364563,  0.05004278,  0.00945839]
        },{
            name:'Fish Fillet',
            data:[ 0.03464913,  0.00369711,  0.00525417,  0.03172574,  0.00448556,
                0.02565005,  0.04364992, -0.00729471,  0.00134176,  0.03143427,
               -0.06155367,  0.08893823,  0.03629935, -0.01572495, -0.00943446,
                0.02251965, -0.00344359,  0.00173804,  0.07820215, -0.04202455,
               -0.00126909,  0.0444092 ,  0.02917462, -0.00826856,  0.05331608,
               -0.07170065,  0.07227467,  0.02157903, -0.05282935,  0.01697295,
                0.01389381, -0.00878885, -0.13336067,  0.07513256, -0.08077035,
                0.0884123 ,  0.00261904, -0.03409733,  0.03111848,  0.01674317,
               -0.07298172, -0.00764897,  0.01725154,  0.02610104]
        }]
    })