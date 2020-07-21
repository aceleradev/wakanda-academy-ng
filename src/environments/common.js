let baseBath = '/wakanda/app/v1';


module.exports = {
    wakanda: {
        baseBath: baseBath,
        wakander: {
            create: {
                path: baseBath + '/userCreation'
            },
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
        },
        action: {
            unlock:{
                path: baseBath + "/wakanderAction"
            }
        }
    }
}