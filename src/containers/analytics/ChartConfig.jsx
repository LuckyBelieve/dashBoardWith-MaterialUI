import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement
} from 'chart.js';
import { faker} from '@faker-js/faker'
    ChartJs.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend,
        BarElement
    )
export const mainChartOptions ={
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            legend:{
                display:false
            },
            title:{
                display:false
            }
        },
        scales:{
            y:{
                beginAtZero:true,
                position:'right',
                ticks:{
                    maxTicksLimit:6
                }
            },
            x:{
                grid:{
                    display:false
                },
                ticks:{
                    maxTicksLimit:3,
                    align:'inner'
                }
            }
        },
        point:false,
        elements:{
            point:{
                pointStyle:false
            },
            line:{
                borderColor:'rgb(95,158,199)',
                fill:true,
                borderWidth:1.5
            }
        }

    };
const days = ['Jan 19,2023','Jan 20,2023','Jan 21,2023','Jan 22,2023','Jan 23,2023','Jan 24,2023','Jan 25,2023','Jan 26,2023','Jan 27,2023','Jan 28,2023',]
export const getMainChatData = ()=>{
        return{
            labels:days,
            datasets:[
                {
                    label:'views',
                    data:days.map(()=>faker.datatype.number({min:600,max:1000})),
                    backgroundColor:'rgba(161,207,237,0.5)',
                    // animation:false
                }
            ]
        }
}