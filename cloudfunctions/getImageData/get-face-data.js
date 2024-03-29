/**
 * @file 获取人脸信息
 * @author Marx
 */

const axios = require('axios');

module.exports = function ({token, imageUrl}) {
    return axios({
        method: 'post',
        url: `https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=${token}`,
        data: {
            image: imageUrl,
            face_field: 'age,beauty,expression,face_shape,gender,glasses,landmark,landmark72,landmark150,race,quality,eye_status,emotion,face_type',
            image_type: 'URL'
        }
    }).then(res => {
        return res.data;
    });
};
