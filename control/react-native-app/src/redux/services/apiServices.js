import http from '../http-common'

const getLastState = (fieldNo,channelNo) => {
    return http.get(`/${channelNo}/fields/${fieldNo}/last.json`)
}

const update = (channelNo,data) => {
    return http.post(`/${channelNo}/bulk_update.json`,data)
}

const apiServices = {
    getLastState,
    update
}

export default apiServices;