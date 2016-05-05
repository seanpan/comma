module.exports = {
    build(res, dummy){
        //return {
        //    'name': {
        //        path: 'name'
        //    },
        //    'logo': {
        //        path: 'logo'
        //    },
        //    'count': {
        //        path: 'stock'
        //    },
        //    'date': {
        //        path: 'startDateStr'
        //    },
        //    'code': {
        //        path: 'courseStatisticsDto.courseCode'
        //    }
        //};
        //return {
        //    data: {
        //        path: 'content.result',
        //        nested: {
        //            'name': {
        //                path: 'name'
        //            },
        //            'logo': {
        //                path: 'logo'
        //            },
        //            'count': {
        //                path: 'stock'
        //            },
        //            'date': {
        //                path: 'startDateStr'
        //            },
        //            'code': {
        //                path: 'courseStatisticsDto.courseCode'
        //            },
        //            success: {
        //                path: 'root'
        //            }
        //        }
        //    }
        //};
        return {
            data: {
                path: 'content.result',
                nested: {
                    name: 'name',
                    code: 'courseStatisticsDto.courseCode',
                    type: '$root.content.type'
                }
            }
        };
        //return {
        //    name: {
        //        path: 'content.result.name'
        //    }
        //};
        //return {
        //    data: {
        //        path: 'content.result',
        //        nested: {
        //            name: 'name'
        //        }
        //    }
        //};
    }
};