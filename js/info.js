$(document).ready(function() {

$('#loading').show();

get_data();

function get_data(){
	var AmbilData;
	$.ajax({
				type : 'POST',
				url : 'http://bikinkakipalsu.com/android/get/info.php',
				//async: true,
				//beforeSend: function(x) {
				//	if(x && x.overrideMimeType) {
      			//		 x.overrideMimeType("application/j-son;charset=UTF-8");
      			//	}
				//},
				dataType : 'json',
				success : function(data){
				
							AmbilData = data.items;
							$('#loading').hide();
							$('#tampilData').show();
							$.each(AmbilData, function(index, loaddata) {
							var html = "";
							html += "<ul class=listview-custom id=list data-role=listview data-inset=true>";
							//html +=   "<li data-role=list-divider>Dynamic list</li>";
							//html +=   "<li data-icon=delete>";
							//html +=      "<a href=#>"+ loaddata.judul + "</a> ("+ loaddata.tanggal +" )";
							html +=      "<a href=#>"+ loaddata.judul + "</a>";
							//html +=   "</li>";
							html += "</ul>";
							$("#home div:jqmData(role=content)").append(html);
								//'<li class="listview1"><a href=# ">'+ loaddata.judul + '</a></li>');
							$("a").click(function(){
							$.get("http://bikinkakipalsu.com/android/get/detail.php",{"q":$(this).text()},function(data,status){
								 // alert("Data: " + data + "\nStatus: " + status);
								 $('#loading').hide();
								 $('#tampilData').html(data);
								});
							});
							});
				},
				error: function(jqXHR, exception) {
					$('#loading').hide();
					$('#gagal').show();
				}
		});	
}
});