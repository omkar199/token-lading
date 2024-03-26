$(document).ready(function () {
  $('.theme-cta').click(function () {
    $('html').toggleClass('light-theme');
  });

  $('.menu_toggle').click(function () {
    $('body').toggleClass('menuactive');
  });

  var typed = new Typed('.letters', {
    // strings: ['Digital Assets', 'Utility Assets', 'In-game Assets'],
    strings: ['$BB', 'BucksBunny'],
    typeSpeed: 60,
    backDelay: 600,
    loopCount: true,
    loop: true,
    smartBackspace: false,
  });
});
$(document).ready(function () {
  $('#JoinWaitlistButton').click(function () {
    $('#Modal').show();
  });
  $('.closeImage').click(function () {
    $('#Modal').hide();
  });
  $('.CloseBtn').click(function () {
    $('#ThankYouModal').hide();
  });
});
$(document).ready(function () {
  document.getElementById('subscribe-handler').onclick = function () {
    var email = document.getElementsByClassName('InputEmail')[0].value;
    var elem = document.getElementById('response');
    var message = elem.querySelector('div');

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == '' || !regex.test(String(email).toLowerCase())) {
      message.innerHTML = 'Please enter a valid email';

      return;
    }

    var formData = new FormData();
    formData.append('api_key', 'AghazFUFk4uDrDUsquEg');
    formData.append('email', email);
    formData.append('list', 'FxuTs610GmfraAm67dxSQQ');

    //  axios
    //    .post('https://sendy.asvalabs.com/subscribe', formData, {
    //      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    //    })
    //    .then((response) => {
    //      const resData = response.data;
    //      if (resData) {
    //        $('#Modal').hide();

    //        $('#ThankYouModal').show();
    //      }
    //    })
    //    .catch((error) => {});
  };
  document.getElementById('subscribe-handle').onclick = function () {
    var email = document.getElementsByClassName('subscribeEmail')[0].value;
    var elem = document.getElementById('respnse');

    var message = elem.querySelector('div');

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == '' || !regex.test(String(email).toLowerCase())) {
      message.innerHTML = 'Please enter a valid email';

      return;
    }

    var formData = new FormData();
    formData.append('api_key', 'AghazFUFk4uDrDUsquEg');
    formData.append('email', email);
    formData.append('list', 'FxuTs610GmfraAm67dxSQQ');

    //   axios.post('https://sendy.asvalabs.com/subscribe',formData, {headers:{'Content-type': 'application/x-www-form-urlencoded'}})
    //   .then(response => {
    //      const resData = response.data;
    //      if(resData.includes(`You're already subscribed!`)){
    //          message.innerHTML = `You're already subscribed!`;
    //          document.getElementsByClassName("subscribeEmail")[0].value = '';
    //      }
    //      if(resData.includes(`You're subscribed!`)){
    //          message.innerHTML = `You're subscribed!`;
    //          document.getElementsByClassName("subscribeEmail")[0].value = '';
    //      }
    //   })
    //   .catch(error => {
    //      message.innerHTML = `Something went wrong!`;
    //   });
  };
});

// Replace this with your Ethereum wallet address
const walletAddress = '0x0bf6b118f6B9c6298937eA4A3ea4876bA0067f53';

// Initialize web3
const web3 = new Web3('https://base.drpc.org');

// Function to get ETH balance
async function getEthBalance() {
  try {
    // Get the ETH balance
    const balance = await web3.eth.getBalance(walletAddress);
    // Convert balance from Wei to Ether
    const etherBalance = web3.utils.fromWei(balance, 'ether');
    // Display the balance on the HTML element with id "ethBalance"
    document.getElementById('ethBalance').textContent = etherBalance + ' ETH';
  } catch (error) {
    console.error('Error getting ETH balance:', error);
  }
}

// Call the function to get the ETH balance when the page loads
window.onload = function () {
  getEthBalance();
};
