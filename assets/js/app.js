$(document).ready(function () {

    //For status wise
    // Shared Colors Definition
    const primary = '#6993FF';
    const success = '#1BC5BD';
    const info = '#8950FC';
    const warning = '#FFA800';
    const danger = '#F64E60';
    var KTApexChartsDemo = function () {
        var _demo12 = function () {
            var lbl_arry = [];
            var val_arry = [];
            $.ajax({
                type: "GET",
                url: "http://115.124.127.208/PMC/PMC_UC_NEW/_IPHONE/PMC_UC/NEW_UC_WEBSERVICES/notice_status2.php",//"http://115.124.127.208/PMC/PMC_UC_NEW/_IPHONE/PMC_UC/NEW_UC_WEBSERVICES/notice_status2.php",
                dataType: "json",
                beforeSend: function () {
                    // setting a timeout
                    $('#dv_status').addClass('spinner');
                },
                success: function (responseText) {
                    var data = typeof responseText != 'object' ? JSON.parse(responseText) : responseText;
                    var ddata = data["DATA"][0];
                    lbl_arry.push("onsite_complaint : " + ddata["onsite_complaint"] + ""); lbl_arry.push("offsite_complaint : " + ddata["offsite_complaint"] + "");
                    lbl_arry.push("saved_complaint : " + ddata["saved_complaint"] + ""); lbl_arry.push("approved_notice : " + ddata["approved_notice"] + "");
                    lbl_arry.push("rejected_notice : " + ddata["rejected_notice"] + ""); lbl_arry.push("pending_notice : " + ddata["pending_notice"] + "");
                    val_arry.push(+(ddata["onsite_complaint"])); val_arry.push(+(ddata["offsite_complaint"])); val_arry.push(+(ddata["saved_complaint"]));
                    val_arry.push(+(ddata["approved_notice"])); val_arry.push(+(ddata["rejected_notice"])); val_arry.push(+(ddata["pending_notice"]));
                    const apexChart = "#chart_status";
                    var options = {
                        series: val_arry,//[44, 55, 13, 43, 22],
                        chart: {
                            width: 380,
                            type: 'pie',
                        },
                        labels: lbl_arry,//['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }],
                        colors: [primary, success, warning, danger, info]
                    };

                    var chart = new ApexCharts(document.querySelector(apexChart), options);
                    chart.render();
                },
                error: function (err) {
                    //alert(err.statusText);
                    //notify_toast("danger","fa-times-circle",err.statusText);
                },
                complete: function () {
                    $('#dv_status').removeClass('card-body spinner'); //remove
                    $('#dv_status').addClass('card-body');
                }
            });

        }
        var _demo13 = function () {
            var lbl_arry = [];
            var val_arry = [];
            $.ajax({
                type: "GET",
                url: "http://115.124.127.208/PMC/PMC_UC_NEW/_IPHONE/PMC_UC/NEW_UC_WEBSERVICES/notice_mode_web.php",
                dataType: "json",
                beforeSend: function () {
                    // setting a timeout
                    $('#dv_mode').addClass('spinner');
                },
                success: function (responseText) {
                    var data = typeof responseText != 'object' ? JSON.parse(responseText) : responseText;
                    var ddata = data["DATA"][1]; var ddata1 = data["DATA"][2]; var ddata2 = data["DATA"][3]; var ddata3 = data["DATA"][0];
                    lbl_arry.push(ddata["COMPLAINT_MODE"] + " : " + ddata["TOT_COUNT"] + "");
                    lbl_arry.push(ddata1["COMPLAINT_MODE"] + " : " + ddata1["TOT_COUNT"] + "");
                    lbl_arry.push(ddata2["COMPLAINT_MODE"] + " : " + ddata2["TOT_COUNT"] + "");
                    lbl_arry.push(ddata3["COMPLAINT_MODE"] + " : " + ddata3["TOT_COUNT"] + "");
                    val_arry.push(+(ddata["TOT_COUNT"])); val_arry.push(+(ddata1["TOT_COUNT"])); val_arry.push(+(ddata2["TOT_COUNT"])); val_arry.push(+(ddata3["TOT_COUNT"]));
                    const apexChart = "#chart_mode";
                    var options = {
                        series: val_arry,//[44, 55, 13, 43, 22],
                        chart: {
                            width: 380,
                            type: 'pie',
                        },
                        labels: lbl_arry,//['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }],
                        colors: [primary, success, warning, danger, info]
                    };

                    var chart = new ApexCharts(document.querySelector(apexChart), options);
                    chart.render();
                },
                error: function (err) {
                    //alert(err.statusText);
                    //notify_toast("danger","fa-times-circle",err.statusText);
                },
                complete: function () {
                    $('#dv_mode').removeClass('card-body spinner'); //remove
                    $('#dv_mode').addClass('card-body');
                }
            });

        }
        var _demo14 = function () {
            var lbl_arry = [];
            var val_arry = [];
            $.ajax({
                type: "GET",
                url: "http://115.124.127.208/PMC/PMC_UC_NEW/_IPHONE/PMC_UC/NEW_UC_WEBSERVICES/MIS_web.php",
                dataType: "json",
                beforeSend: function () {
                    // setting a timeout
                    $('#dv_notice').addClass('spinner');
                },
                success: function (responseText) {
                    var data = typeof responseText != 'object' ? JSON.parse(responseText) : responseText;
                    for (var i = 0; i < data["DATA"].length; i++) {
                        var notice_type = data["DATA"][i]["TYPE_OF_NOTICE"];
                        var notice_val = data["DATA"][i]["TOT_COUNT"];
                        lbl_arry.push(notice_type + " : " + notice_val + "");
                        val_arry.push(+(notice_val));
                    }
                    const apexChart = "#chart_notice";
                    var options = {
                        series: val_arry,//[44, 55, 13, 43, 22],
                        chart: {
                            width: 590,
                            type: 'pie',
                        },
                        labels: lbl_arry,//['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 500,
                                    height: 500
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }],
                        colors: [primary, success, warning, danger, info]
                    };

                    var chart = new ApexCharts(document.querySelector(apexChart), options);
                    chart.render();
                },
                error: function (err) {
                    //alert(err.statusText);
                    //notify_toast("danger","fa-times-circle",err.statusText);
                },
                complete: function () {
                    $('#dv_notice').removeClass('card-body spinner'); //remove
                    $('#dv_notice').addClass('card-body');
                }
            });

        }
        return {
            // public functions
            init: function () {
                _demo12();
                _demo13();
                _demo14();
            }
        };
    }();
    jQuery(document).ready(function () {
        KTApexChartsDemo.init();
    });
});