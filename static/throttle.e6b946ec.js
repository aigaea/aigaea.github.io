let e;const s=(t,o=3e3,f=!0)=>{f?e||(e=!0,typeof t=="function"&&t(),setTimeout(()=>{e=!1},o)):e||(e=!0,setTimeout(()=>{e=!1,typeof t=="function"&&t()},o))};export{s as t};
