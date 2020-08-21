let baseBath = '/wakanda/app/v1';


module.exports = {
    wakanda: {
        baseBath: baseBath,
        wakander: {
            create: {
                path: baseBath + '/user'
            },
            auth: {
                login: {
                    path: baseBath + '/authenticate'
                },
                renew: {
                    path: baseBath + "/authenticate/refresh"
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
            },
            goal: {
                path: baseBath + "/wakander/{wakanderCode}/goal"
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