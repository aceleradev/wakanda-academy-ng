let baseBath = '/wakanda/app/v1';


module.exports = {
    wakanda: {
        baseBath: baseBath,
        wakander: {
            create: {
                path: baseBath + '/userCreation'
            },
            auth: {
                login: {
                    path: baseBath + '/authenticate'
                },
                renew: {
                    path: baseBath + "/authenticate/renew"
                }
            },
            profile: {
                path: baseBath + '/wakander/'
            },
            tribe: {
                detail: {
                    path: baseBath + '/wakander/{wakanderCode}/tribe/'
                },
                list: {
                    path: baseBath + '/wakander/{wakanderCode}/tribe'
                }
            }
        },
        action: {
            unlock: {
                path: baseBath + "/wakanderAction"
            },
            nextLesson: {
                path: baseBath + "/wakanderAction"
            }
        }
    }
}