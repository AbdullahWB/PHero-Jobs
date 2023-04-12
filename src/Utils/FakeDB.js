import swal from 'sweetalert';
const addToDb = id => {

  let shoppingCart = {};

  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }

  // Check if item already exists in cart
  if (shoppingCart[id]) {
    swal({
      title: "Hello Dear user",
      text: "You already apply this job!⚠️",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("See you again❤️❤️", {
            icon: "success",
          });
        } else {
          swal("⚠️⚠️You don add this second time!");
        }
      });
    return;
  }

  shoppingCart[id] = 1;

  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const getStoredCart = () => {

  let shoppingCart = {};

  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }

  return shoppingCart;
}


export { addToDb, getStoredCart };