module.exports = async function (context, req, stocks) {
    //context.res.body = stocks;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: stocks
    };
};