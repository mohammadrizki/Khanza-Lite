$(document).ready(function(){
  // $('.bidang').on('change', function() {
  //   var baseURL = mlite.url + '/' + mlite.admin;
  //   var optionText = (this.value);
  //   var option = optionText.toLowerCase();
  //   var opt = decodeURI(option);
  //   window.location.href = baseURL+'/presensi/rekap_presensi?ruang='+opt+'&t={?=$_SESSION[token]?}'
  // });

  $('#manage').on('click', '#submit_periode_rawat_jalan', function(event){
    var baseURL = mlite.url + '/' + mlite.admin;
    event.preventDefault();
    var url    = baseURL + '/presensi/rekap_presensi?t=' + mlite.token;
    var periode_rawat_jalan  = $('input:text[name=periode_rawat_jalan]').val();
    var periode_rawat_jalan_akhir  = $('input:text[name=periode_rawat_jalan_akhir]').val();
    var s  = $('input:text[name=s]').val();
  
    if(periode_rawat_jalan == '') {
      alert('Tanggal awal masih kosong!')
    }
    if(periode_rawat_jalan_akhir == '') {
      alert('Tanggal akhir masih kosong!')
    }

      var optionText = document.getElementById("bidang").value;
      var option = optionText.toLowerCase();
      var opt = decodeURI(option);

    window.location.href = baseURL+'/presensi/rekap_presensi?awal='+periode_rawat_jalan+'&akhir='+periode_rawat_jalan_akhir+'&ruang='+opt+'&s='+s+'&t={?=$_SESSION[token]?}'
    
    event.stopPropagation();
  
  });
  $('#manage').on('click', '#cari', function(event){
    var baseURL = mlite.url + '/' + mlite.admin;
    event.preventDefault();
    var url    = baseURL + '/presensi/rekap_presensi?t=' + mlite.token;
    var s  = $('input:text[name=s]').val();
  
    
      var optionText = document.getElementById("bidang").value;
      var option = optionText.toLowerCase();
      var opt = decodeURI(option);

    window.location.href = baseURL+'/presensi/rekap_presensi?s='+s+'&ruang='+opt+'&t={?=$_SESSION[token]?}'
    
  
    event.stopPropagation();
  
  });
})

   $(function () {
       $('.periode_rawat_jalan').datetimepicker({
         defaultDate: '{?=date('Y-m-d')?}',
         format: 'YYYY-MM-DD',
         locale: 'id'
       });
   });