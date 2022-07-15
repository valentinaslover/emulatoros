function particleColo(color)
{
 localStorage.setItem("particletheme", color)
}
function pselectio(lin)
{
  localStorage.setItem("plink", lin)
}
document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem("particletheme") !== 'hide'){
        
    console.log('nopRT');
    }
    });
    document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem("particletheme") !== 'blue'){
        
    console.log('nopRTB');
    }
    });
    document.addEventListener('DOMContentLoaded', function(){
        if (localStorage.getItem("particletheme") !== 'normal3'){
            
        console.log('nopRT3');
        }
        });
        document.addEventListener('DOMContentLoaded', function(){
            if (localStorage.getItem("particletheme") !== 'normal2'){
                
            console.log('nopRT2');
            }
            });
            document.addEventListener('DOMContentLoaded', function(){
                if (localStorage.getItem("particletheme") !== 'normal1'){
                    
                console.log('nopRT1');
                }
                });