router.get('/moreContent', function(req, res) {
    var index = req.query.index;
    var num = req.query.num;
    var arr = [];
    for (var i = index; i < parseInt(num) + parseInt(index); i++) {
        arr.push('内容'+i);
    }
    res.send(arr)
})
