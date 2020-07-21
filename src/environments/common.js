let baseBath = '/wakanda/app/v1';


module.exports = {
    wakanda: {
        baseBath: baseBath,
        wakander: {
            auth:{
                path: baseBath + '/authenticate'
            },
            profile: {
                path: baseBath + '/wakander/'
            },
            tribe: {
                detail: {
                    path: baseBath + '/{wakanderCode}/tribe/'
                },
                list: {
                    path: baseBath + '/{wakanderCode}/tribe'
                }
            }
        }
    }
}