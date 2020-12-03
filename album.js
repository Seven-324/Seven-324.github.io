let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            const response = JSON.parse(req.responseText);
            var ladies = response.ladies;

            var output = '';
            for(var i = 0; i < ladies.length; i++){
                output += 
                `<li>
                    <figure>
                        <img class="materialboxed" width="650" src="${ladies[i].url}" id="the-img"/><br>
                        <figurecaption>
                            ${ladies[i].name}<br>
                            ${ladies[i].qualification}
                        </figurecaption>
                    </figure>
                </li>`;
            }
            document.getElementById('ladies').innerHTML = output;
        }
        };

        req.open("GET", "https://api.jsonbin.io/b/5fc428579abe4f6e7cad20d3/6", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("secret-key", "$2b$10$BxMIs7X2rGDW2i1p38Ti1O/U653PK/7rGc1HnH3hV1oG/gfWeTbmK");
        req.send('{"Sample": "Hello World"}');

        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.slider');
        //     var instances = M.Slider.init(elems, options);
        //   });

       

        // $(document).ready(function(){ $('.materialboxed').materialbox(); });
        // document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.materialboxed'); var instances = M.Materialbox.init(elems, options); });
        