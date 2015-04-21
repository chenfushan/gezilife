$(document).ready(function() {

	var year=1950;
	var month=0;
	var day=0;
	var innerHtml;
	for (var i = 0; i < 130; i++) {
		year = year+1;
		innerHtml = "<option value="+year+">"+year+"</option>";
		$('#startDateYear').append(innerHtml);
		$('#endDateYear').append(innerHtml);
	};

	for (var i = 0; i < 12; i++) {
		month = month+1;
		innerHtml = "<option value="+month+">"+month+"</option>";
		$('#startDateMonth').append(innerHtml);
		$('#endDateMonth').append(innerHtml);
	};

	for (var i = 0; i < 31; i++) {
		day = day+1;
		innerHtml = "<option value="+day+">"+day+"</option>";
		$('#startDateDay').append(innerHtml);
		$('#endDateDay').append(innerHtml);
	};

	//start Year
	$('#startDateYear').val(2000);
	//end Year
	$('#endDateYear').val(2012);

	$('#startDateYear').change(function() {
		var startYear = $('#startDateYear').val();
		var startMonth = $('#startDateMonth').val();
		console.log("change");
		if (startMonth == 2) {
			if ((startYear%4 == 0 && startYear%100 != 0) || (startYear%400 == 0)) {
				addDayOption(startDateDay, 29);
			}else{
				addDayOption(startDateDay, 28);
			}
		}else{
			if (startMonth == 4 || startMonth == 6 || startMonth == 9 || startMonth == 10 || startMonth == 11) {
				addDayOption(startDateDay, 30);
			}
		}
	});

	$('#startDateMonth').change(function() {
		var startYear = $('#startDateYear').val();
		var startMonth = $('#startDateMonth').val();
		console.log("change");
		if (startMonth == 2) {
			if ((startYear%4 == 0 && startYear%100 != 0) || (startYear%400 == 0)) {
				addDayOption(startDateDay, 29);
			}else{
				addDayOption(startDateDay, 28);
			}
		}else{
			if (startMonth == 4 || startMonth == 6 || startMonth == 9 || startMonth == 10 || startMonth == 11) {
				addDayOption(startDateDay, 30);
			}
		}
	});

	$('#endDateYear').change(function() {
		var endYear = $('#endDateYear').val();
		var endMonth = $('#endDateMonth').val();
		console.log("change");
		if (endMonth == 2) {
			if ((endYear%4 == 0 && endYear%100 != 0) || (endYear%400 == 0)) {
				addDayOption(endDateDay, 29);
			}else{
				addDayOption(endDateDay, 28);
			}
		}else{
			if (endMonth == 4 || endMonth == 6 || endMonth == 9 || endMonth == 10 || endMonth == 11) {
				addDayOption(endDateDay, 30);
			}
		}
	});
	
	$('#endDateMonth').change(function() {
		var endYear = $('#endDateYear').val();
		var endMonth = $('#endDateMonth').val();
		console.log("change");
		if (endMonth == 2) {
			if ((endYear%4 == 0 && endYear%100 != 0) || (endYear%400 == 0)) {
				addDayOption(endDateDay, 29);
			}else{
				addDayOption(endDateDay, 28);
			}
		}else{
			if (endMonth == 4 || endMonth == 6 || endMonth == 9 || endMonth == 10 || endMonth == 11) {
				addDayOption(endDateDay, 30);
			}
		}
	});
});

function addDayOption (id, dayNum) {
	$(id).empty();
	var day = 0;
	for (var i = 0; i < dayNum; i++) {
		day = day+1;
		innerHtml = "<option value="+day+">"+day+"</option>";
		$(id).append(innerHtml);
	};
}