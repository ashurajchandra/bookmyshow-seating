// {
//     [
//         {
//             seatClassType:String,
//             seatClassPrice: Number,
//             {
//                 rowId: string
//                 seats:[
//                     {
//                         id:string;
//                         availablity: enum;
//                         seatNumber: number
//                     }
//                 ]
//             }
//         }
//     ]
// }


export  const response = {
   data: [
    { 
        seatClassId: 3,
        seatClassType: "Recliner",
        seatClassPrice: 1000 ,

        //multiple-rows
        rows:[
            {
                rowId: 2,
                rowValue: "M",
                seats:[
                    {
                        seatId:31,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:32,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:33,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:4,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:7,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "notAvailable",
                            seatValue:""
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "booked",
                        seatValue:7
                    },
                    {
                        seatId:12,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:8
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:9
                    },
                    {
                        seatId:17,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:10
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:20,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:12
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:13
                    },
                    {
                        seatId:23,
                        seatAvailability: "notAvailable",
                        seatValue:14
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:16
                    },
                ]

            },
            {
                rowId: 1,
                rowValue: "L",
                seats:[
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:4,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:7,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "notAvailable",
                            seatValue:""
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "booked",
                        seatValue:7
                    },
                    
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:8
                    },
                   
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:9
                    },
                    {
                        seatId:16,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:17,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:18,
                        seatAvailability: "booked",
                        seatValue:10
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:20,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:12
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:13
                    },
                    {
                        seatId:23,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:14
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:26,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:27,
                        seatAvailability: "booked",
                        seatValue:16
                    },
                    {
                        seatId:28,
                        seatAvailability: "booked",
                        seatValue:17
                    }
                ]

            },
           
          
        ]
    },
    { 
        seatClassId: 1,
        seatClassType: "Executive",
        seatClassPrice: 400 ,

        //multiple-rows
        rows:[
            {
                rowId: 1,
                rowValue: "K",
                seats:[
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "booked",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "booked",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "available",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "booked",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:24
                    },
                    {
                        seatId:27,
                        seatAvailability: "booked",
                        seatValue:25
                    }
                ]

            },
            {
                rowId: 1,
                rowValue: "",
                seats:[
                 
                    // {
                    //     seatId:1,
                    //     seatAvailability: "available",
                    //     seatValue:1
                    // },
                    // {
                    //     seatId:2,
                    //     seatAvailability: "available",
                    //     seatValue:2
                    // },
                    // {
                    //     seatId:4,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:""
                    // },
                    // {
                    //     seatId:5,
                    //     seatAvailability: "available",
                    //     seatValue:3
                    // },
                    // {
                    //     seatId:6,
                    //     seatAvailability: "available",
                    //     seatValue:4
                    // },
                    // {
                    //     seatId:7,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:""
                    // },
                    // {
                    //     seatId:8,
                    //     seatAvailability: "available",
                    //     seatValue:5
                    // },
                    // {
                    //     seatId:9,
                    //     seatAvailability: "available",
                    //     seatValue:6
                    // },
                    // {
                    
                    //         seatId:10,
                    //         seatAvailability: "notAvailable",
                    //         seatValue:""
                        
                    // },
                    // {
                    //     seatId:11,
                    //     seatAvailability: "booked",
                    //     seatValue:7
                    // },
                    // {
                    //     seatId:12,
                    //     seatAvailability: "booked",
                    //     seatValue:8
                    // },
                    // {
                    //     seatId:13,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:""
                    // },
                    // {
                    //     seatId:14,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:""
                    // },
                    // {
                    //     seatId:15,
                    //     seatAvailability: "booked",
                    //     seatValue:9
                    // },
                    // {
                    //     seatId:16,
                    //     seatAvailability: "booked",
                    //     seatValue:10
                    // },
                    // {
                    //     seatId:17,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:""
                    // },
                    // {
                    //     seatId:18,
                    //     seatAvailability: "available",
                    //     seatValue:11
                    // },
                    // {
                    //     seatId:19,
                    //     seatAvailability: "available",
                    //     seatValue:12
                    // },
                    // {
                    //     seatId:20,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:""
                    // },
                    // {
                    //     seatId:21,
                    //     seatAvailability: "available",
                    //     seatValue:13
                    // },
                    // {
                    //     seatId:22,
                    //     seatAvailability: "available",
                    //     seatValue:14
                    // },
                    // {
                    //     seatId:23,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:15
                    // },
                    // {
                    //     seatId:24,
                    //     seatAvailability: "available",
                    //     seatValue:16
                    // },
                    // {
                    //     seatId:25,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:""
                    // },
                    // {
                    //     seatId:26,
                    //     seatAvailability: "notAvailable",
                    //     seatValue:""
                    // }
                ]

            },
            {
                rowId: 3,
                rowValue: "J",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "booked",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "booked",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:24
                    }
                ]

            },
            {
                rowId: 3,
                rowValue: "I",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                 
                    {
                        seatId:1,
                        seatAvailability: "booked",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "booked",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "booked",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "available",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:24
                    },
                ]

            },
            {
                rowId: 3,
                rowValue: "H",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "available",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:24
                    }
                ]

            },
            {
                rowId: 3,
                rowValue: "G",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "available",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:24
                    }
                ]

            },
            {
                rowId: 3,
                rowValue: "F",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "available",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:24
                    }
                ]

            },
            {
                rowId: 2,
                rowValue: "E",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "available",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:24
                    }
                ]

            },
            {
                rowId: 1,
                rowValue: "D",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                 
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "available",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "available",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "available",
                        seatValue:24
                    }
                ]

            },
           
          
           
          
        ]
    }, 
    { 
        seatClassId: 1,
        seatClassType: "Classic",
        seatClassPrice: 200 ,

        //multiple-rows
        rows:[
            {
                rowId: 3,
                rowValue: "C",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:5,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:6,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:7,
                        seatAvailability: "available",
                        seatValue:7
                    },
                    {
                        seatId:8,
                        seatAvailability: "available",
                        seatValue:8
                    },
                    {
                        seatId:9,
                        seatAvailability: "available",
                        seatValue:9
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "available",
                            seatValue:10
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "available",
                        seatValue:11
                    },
                    {
                        seatId:12,
                        seatAvailability: "booked",
                        seatValue:12
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "booked",
                        seatValue:13
                    },
                    {
                        seatId:16,
                        seatAvailability: "booked",
                        seatValue:14
                    },
                    {
                        seatId:17,
                        seatAvailability: "available",
                        seatValue:15
                    },
                    {
                        seatId:18,
                        seatAvailability: "available",
                        seatValue:16
                    },
                    {
                        seatId:19,
                        seatAvailability: "available",
                        seatValue:17
                    },
                    {
                        seatId:20,
                        seatAvailability: "available",
                        seatValue:18
                    },
                    {
                        seatId:21,
                        seatAvailability: "available",
                        seatValue:19
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:20
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:21
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:22
                    },
                    {
                        seatId:25,
                        seatAvailability: "blocked",
                        seatValue:23
                    },
                    {
                        seatId:26,
                        seatAvailability: "blocked",
                        seatValue:24
                    }
                ]

            },
            {
                rowId: 2,
                rowValue: "B",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:1,
                        seatAvailability: "available",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "available",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "available",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:5,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:6,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:7,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:8,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:9,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "notAvailable",
                            seatValue:""
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:12,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:16,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:17,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:18,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:19,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:20,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:21,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:25,
                        seatAvailability: "personWithDisability",
                        seatValue:7
                    },
                    {
                        seatId:26,
                        seatAvailability: "personWithDisability",
                        seatValue:8
                    }
                ]

            },
            {
                rowId: 1,
                rowValue: "A",
                seats:[
                    {
                        seatId:99,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:1,
                        seatAvailability: "personWithDisability",
                        seatValue:1
                    },
                    {
                        seatId:2,
                        seatAvailability: "personWithDisability",
                        seatValue:2
                    },
                    {
                        seatId:3,
                        seatAvailability: "personWithDisability",
                        seatValue:3
                    },
                    {
                        seatId:4,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:5,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:6,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:7,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:8,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:9,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                    
                            seatId:10,
                            seatAvailability: "notAvailable",
                            seatValue:""
                        
                    },
                    {
                        seatId:11,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:12,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:13,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:14,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:15,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:16,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:17,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:18,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:19,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:20,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:21,
                        seatAvailability: "notAvailable",
                        seatValue:""
                    },
                    {
                        seatId:22,
                        seatAvailability: "available",
                        seatValue:4
                    },
                    {
                        seatId:23,
                        seatAvailability: "available",
                        seatValue:5
                    },
                    {
                        seatId:24,
                        seatAvailability: "available",
                        seatValue:6
                    },
                    {
                        seatId:25,
                        seatAvailability: "personWithDisability",
                        seatValue:7
                    },
                    {
                        seatId:26,
                        seatAvailability: "personWithDisability",
                        seatValue:8
                    }
                ]

            },
           
           
          
        ]
    } ,
    
      
    ]
}