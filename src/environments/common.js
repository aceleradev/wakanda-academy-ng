let baseBath = '/wakanda/app/v1';


module.exports = {
    wakanda: {
        baseBath: baseBath,
        wakander: {
            profile: {
                path: baseBath + '/wakander/{wakanderCode}/teste'
            },
            tribe: {
                detail: {
                    path: baseBath + '/tribe'
                },
                list: {
                    path: baseBath + '/listTribes'
                }
            }
        }
    }
}