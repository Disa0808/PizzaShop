function add_to_cart(id)
{ 
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
  alert('Items in your cart: ' + cart_get_number_of_items());
}



// calculate count of products in cart
function cart_get_number_of_items()
{
  var cnt = 0;
  for(var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i); // get key
    var value = window.localStorage.getItem(key); // get value
    if(key.indexOf('product_') == 0)
    {
      cnt = cnt + value * 1;

    }
  }
  return cnt;


}