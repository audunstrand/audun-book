module.exports = function (stockRepository) {

    return {
        stockUp: (req, res, next) => {
            var isbn = req.body.isbn;
            var count = req.body.count;

            stockRepository.
                stockUp(isbn, count).
                catch(next);

            res.json({isbn: isbn, count: count});
        },
        findAll:  (req, res, next) =>{
            stockRepository.findAll().
                then(function (docs) {
                    res.json(docs);
                }).
                catch(next);
        },
        getCount: (req, res) => {
            stockRepository.getCount(req.params.isbn).then(function (result) {
                if (result !== null) {
                    res.status(200).json({count: result});
                } else {
                    res.status(404).json({error: 'No book with ISBN: ' + req.params.isbn});
                }
            });
        }
    };
};