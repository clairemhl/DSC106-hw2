Highcharts.chart('ds_product',{
    chart:{
        type:'line'
    },
    title:{
        text: "Daily sales data for each product"
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
                name: 'Hamburber',
                data:[37083.2, 36592.2, 35717.8, 36403.6, 36583.2, 36060.4, 35791.8,
                    36053.4, 36028.2, 36156. , 36623.8, 35713.4, 36491. , 36549.8,
                    36467.6, 35843.8, 36045.6, 36192.8, 35781. , 35627.8, 36148.8,
                    36753.6, 35888.2, 36084.4, 35874.6, 36195.8, 36864.6, 35083.4,
                    35563.2, 36014. , 35452.6]
            },{
            name: 'Chicken Fillet',
            data: [15383. , 14555.8, 15431.4, 15257.8, 15012.4, 15103.2, 14987.6,
                14417.2, 14313.6, 15446.2, 15799. , 15444.2, 15516.2, 14945.2,
                15490.6, 15246.8, 15585.6, 14927.4, 14667.6, 14937.6, 15440.8,
                15708. , 14762.4, 14902. , 15650.8, 15296. , 15602.4, 15350.4,
                14900.4, 14982. , 15470.6]
        },{
            name:'Fish Fillet',
            data:[10308. ,  8290.2,  8120.4,  8428.2,  9513.6,  9464.8,  9394.6,
                10779.2,  7417.4,  8098. ,  9302.4,  8475.8,  9426.6,  9268.6,
                10257.4,  8326.8,  7680.2,  9038.6,  8500. ,  8971.8,  9756.8,
                10726.8,  8249.2,  7867.4,  9032. ,  8835.6,  9101.2, 10266. ,
                10695.4,  7822.8,  8516.2]
        }]
    })