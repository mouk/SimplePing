
exports.handler = async function (event) {
    console.log(event);
    return {
        statusCode: 200,
        body: "Hi, there! 2.0"
    };
}
