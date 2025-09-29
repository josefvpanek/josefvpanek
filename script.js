async function loadPage() {
  const headerHTML = await fetch('header.html').then(r => r.text());
  document.querySelector('header').innerHTML = headerHTML;

  const footerHTML = await fetch('footer.html').then(r => r.text());
  document.querySelector('footer').innerHTML = footerHTML;
  
  document.body.style.visibility = 'visible'
}

loadPage()