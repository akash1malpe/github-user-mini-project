fetch("https://api.github.com/users")
.then((res) => res.json())
.then((data)=>{
        // console.log(data[0].avatar_url)
        // console.log(data)
        document.getElementById("userphotos1").setAttribute("src",data[0].avatar_url);
        document.getElementById('username1').innerHTML = data[0].login;
        document.getElementById('visitprofile1').setAttribute("href",data[0].html_url )

        document.getElementById("userphotos2").setAttribute("src" ,data[1].avatar_url);
        // console.log(data[1].avatar_url)
        document.getElementById('username2').innerHTML = data[1].login;
        document.getElementById('visitprofile2').setAttribute("href",data[1].html_url)

        document.getElementById("userphotos3").setAttribute("src" ,data[2].avatar_url);
        document.getElementById('username3').innerHTML = data[2].login;
        document.getElementById('visitprofile3').setAttribute("href",data[2].html_url)

        document.getElementById("userphotos3").setAttribute("src" ,data[3].avatar_url);
        document.getElementById('username3').innerHTML = data[3].login;
        document.getElementById('visitprofile3').setAttribute("href",data[3].html_url)

        document.getElementById("userphotos4").setAttribute("src" ,data[4].avatar_url);
        document.getElementById('username4').innerHTML = data[4].login;
        document.getElementById('visitprofile4').setAttribute("href",data[4].html_url)

        
        document.getElementById("userphotos8").setAttribute("src" ,data[5].avatar_url);
        document.getElementById('username8').innerHTML = data[5].login;
        document.getElementById('visitprofile8').setAttribute("href",data[5].html_url)

        document.getElementById("userphotos5").setAttribute("src" ,data[6].avatar_url);
        document.getElementById('username5').innerHTML = data[6].login;
        document.getElementById('visitprofile5').setAttribute("href",data[6].html_url)

        document.getElementById("userphotos6").setAttribute("src" ,data[7].avatar_url);
        document.getElementById('username6').innerHTML = data[7].login;
        document.getElementById('visitprofile6').setAttribute("href",data[7].html_url)

        document.getElementById("userphotos7").setAttribute("src" ,data[8].avatar_url);
        document.getElementById('username7').innerHTML = data[8].login;
        document.getElementById('visitprofile7').setAttribute("href",data[8].html_url)


        document.getElementById("userphotos8").setAttribute("src" ,data[9].avatar_url);
         document.getElementById('username8').innerHTML = data[9].login;
        document.getElementById('visitprofile8').setAttribute("href",data[9].html_url)

        document.getElementById("userphotos9").setAttribute("src" ,data[10].avatar_url);
       document.getElementById('username9').innerHTML = data[10].login;
        document.getElementById('visitprofile9').setAttribute("href",data[10].html_url)

        document.getElementById("userphotos10").setAttribute("src" ,data[11].avatar_url);
        document.getElementById('username10').innerHTML = data[11].login;
         document.getElementById('visitprofile10').setAttribute("href",data[11].html_url)

        document.getElementById("userphotos11").setAttribute("src" ,data[12].avatar_url);
        document.getElementById('username11').innerHTML = data[12].login;
         document.getElementById('visitprofile11').setAttribute("href",data[12].html_url)
 })