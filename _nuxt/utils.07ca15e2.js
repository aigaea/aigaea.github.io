const a=()=>"10000000-1000-4000-8000-100000000000".replace(/[018]/g,t=>(+t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>+t/4).toString(16)),u=()=>"https://aigaea.net",i=()=>"0x4AAAAAAAkhM1uKU9iprx7x",g=({value:t,characters:e="****",start:r=3,end:n=4})=>{const s=new RegExp("^(.{"+r+"}).*(.{"+n+"})$");return t?t.replace(s,`$1${e}$2`):""},p=t=>typeof t=="number"&&!isNaN(t)?!1:t?Object.keys(t).length<1:!0;export{i as a,u as g,p as i,g as s,a as u};
