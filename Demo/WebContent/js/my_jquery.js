$(document).ready(
	function(e) {
					$(".dong").hide();
					$("#id_header").load("header.html");
					$("#id_footer").load("footer.html");
					$(".cbloc").attr("checked", false);

					$("#checkAll").change(function(e) {
						$(".checkds").prop('checked', $(this).prop("checked"));
						$("#cbchonboloc").attr("selected", "selected");
						var vt;

					});
					$("li").click(function(e) {
						vt = parseInt($(this).index() + 1);
						var x = parseInt(5 * (vt - 1) + 1);
						var y = parseInt(5 * vt) + 1;
						$(".dong").hide();
						for (var i = x; i < y; i++) {
							$("#" + i + "").show();
						}
					});
					// $("#il1").click(function(e) {
					// var idex=$(this).index()+1;
					// var x=parseInt(5*(idex-1)+1);
					// var y=parseInt(5*idex)+1;
					// //alert(idex+"-"+x +"-"+ y);
					// for(var i=x ;i<y;i++){
					// ;
					// $("#"+i+"").show();
					// }
					// });

					// -------Gán cho trang 1 được chọn mặc định
					$("#il1").click();
					// -------------------------------------------

					$("#ckhoten").change(function() {
						if ($(this).prop("checked") == true) {
							$("#txthoten").css("visibility", "visible");
						} else if ($(this).prop("checked") == false) {
							$("#txthoten").css("visibility", "hidden");
							hidden
						}
					});
					$("#ckngaysinh").change(function() {
						if ($(this).prop("checked") == true) {
							$("#txtngaysinh").css("visibility", "visible");
						} else if ($(this).prop("checked") == false) {
							$("#txtngaysinh").css("visibility", "hidden");
						}
					});
					$("#ckquocgia").change(function() {
						if ($(this).prop("checked") == true) {
							$("#txtquocgia").css("visibility", "visible");
						} else if ($(this).prop("checked") == false) {
							$("#txtquocgia").css("visibility", "hidden");
						}
					});

					$("select").change(function(e) {
						switch ($(':selected').val()) {
						case "cbhoten":
							$("#trhoten").css("visibility", "visible");
							$("#cbhoten").attr('disabled', 'disabled');
							break;
						case "cbngaysinh":
							$("#trngaysinh").css("visibility", "visible");
							$("#cbngaysinh").attr('disabled', 'disabled');
							break;
						case "cbquocgia":
							$("#trquocgia").css("visibility", "visible");
							$("#cbquocgia").attr('disabled', 'disabled');
							break;
						}
					});
					$("#v2xoa").click(function(e) {
						$(":disabled").removeAttr('disabled');
						$("#trhoten").css("visibility", "hidden");
						$("#trngaysinh").css("visibility", "hidden");
						$("#trquocgia").css("visibility", "hidden");
						$(".cbloc").attr("checked", false);

						$(".txtloc").css("visibility", "hidden");
						$("#cbchonboloc").attr("selected", "selected");
						$(".dong").css("visibility", "visible");
						$(".dong").show();
					});

					$("#v4them")
							.click(
									function(e) {
										$(".dong").css("visibility", "visible");
										var m = $(".dong:last-child").index() + 1;
										var txt1 = "<td class='o1' ><input type='checkbox'class='checkds'/></td><td class='o2'>"
												+ m
												+ "</td><td class='o3' class='ht'><p>HS01 | Võ Tấn Biên</p></td><td class='o4'><p>18/05/2014</p></td>";
										var txt2 = "<td class='o5'><p>Việt Nam</p></td>";

										$(".dong:last-child").after(
												"<tr class='dong' id='" + m
														+ "' >" + txt1 + txt2
														+ "</tr>");
										var m1 = $(".dong:last-child").index();
										$(".dong:last-child").hide();
										if (m1 % 5 == 0) {
											var q = m1 / 5 + 1;
											$("#ulul>li:last-child").after(
													"<li>" + q + "</li>");
											alert("qua trang");
										}

										// var t1=$(".dong:last-child").index();
										// if(t1>5){
										//	
										// alert("Lon hon 5 roi");
										// }

									});

					$("#v4xoa")
							.click(function(e) {
										var ma = [];
										var i = 0;
										$(".checkds").each(function(index, element) {
															if ($(this).is(":checked")) {
																ma[i] = index + 1;
																i++;
															} else {
																$("#checkAll").prop('checked',false);
															}
														});

										if (ma.length > 0) {
											if (confirm("Bạn có chắc rằng muốn xoá các dòng đã chọn") == true) {
												for (var k = 0; k < ma.length; k++) {
													$("#" + ma[k] + "")	.remove();
												}
											}
										} else {
											alert("Bạn chưa chọn dòng nào");
										}

					// Reset số thứ tự---------------------------
										$(".dong").each(
												function(index, element) {
													var j = $(this).index();
													$(this).children(".o2").html(j);
													// alert(j);
												});
									});
					// -------------------------------------------

					$("#txthoten").keyup(function(e) {
						$(".dong").hide();
						var st = $(this).val();
						$(".o3>p").each(function(index, element) {
							var sb = $(this).html();
							var kq = parseInt(sb.search(st));
							if (kq > -1) {
								var x = $(this).closest("tr").attr("id");
								$("#" + x + "").show();
								// alert(x);
							}
						});
					});

					$("#txtngaysinh").keyup(function(e) {
						$(".dong").hide();
						var st = $(this).val();
						$(".o4>p").each(function(index, element) {
							var sb = $(this).html();
							var kq = parseInt(sb.search(st));
							if (kq > -1) {
								var x = $(this).closest("tr").attr("id");
								$("#" + x + "").show();
								// alert(x);
							}
						});
					});
					$("#txtquocgia").keyup(function(e) {
						$(".dong").hide();
						var st = $(this).val();
						$(".o5>p").each(function(index, element) {
							var sb = $(this).html();
							var kq = parseInt(sb.search(st));
							if (kq > -1) {
								var x = $(this).closest("tr").attr("id");
								$("#" + x + "").show();
								// alert(x);
							}
						});
					});

				});