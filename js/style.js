var script = document.getElementsByTagName('script');   
script = script[script.length-1].src.replace(/^[^\?]+\?/, '').replace(/#.+$/, '').split('&');                                   
var queries = {}, query;
while(script.length){                      
     query = script.shift().split('=');    
     queries[query[0]] = query[1];   
}

$.ajax({
  url:`./css/${queries.src}.css`,
  dataType:"text",
  success:(data)=> {
    $("head").append(`<style>${data}</style>`);
  }
});

