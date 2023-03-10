import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

var getMethod = {
    method: 'get',
    headers: {}
}

var getOneMethod = {
    method: 'get',
    headers: {}
}

var postMethod = {
    method: 'post',
    headers: {
        "Content-Type": "application/json"
    }
}

var updateMethod = {
    method: 'put',
    headers: {
        "Content-Type": "application/json"
    }
}

var deleteMethod = {
    method: 'delete',
    headers: {}
}

export const getService = (url) => {
    return axios({ ...getMethod, url: baseUrl + url });
}

export const getOneService = (url) => {
    return axios({ ...getOneMethod, url: baseUrl + url });
}

export const postService = (url, data) => {
    return axios({ ...postMethod, url: baseUrl + url, data: data });
}

export const updateService = (url, data) => {
    return axios({ ...updateMethod, url: baseUrl + url, data: data });
}

export const deleteService = (url) => {
    return axios({ ...deleteMethod, url: baseUrl + url });
}