let timer,timer1;
 var cfale = false
 var cfale1 = false
 var cfale2 = false


 timer1 = setInterval(() => {
    if(cfale){

      clearInterval(timer1)

     return

    }

    if(document.querySelector('._akaz')){


         cfale = true


       document.querySelector('._akaz').parentNode.insertAdjacentHTML("afterbegin",
               "<img class='_akaz' style='width:64px;z-index:5;' src='data:image/jpeg;base64,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'/>"
           )



   }
  },200)

function getCount() {
           if (document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn")){
               var nodeList = document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn");
               var count = 0;
               for (const nodeDiv of nodeList) {
                   count = count + parseInt(nodeDiv.innerText);
               }
               return count


           }

      }


 timer = setInterval(() => {

   if(cfale1){

      clearInterval(timer)

      return
    }



   var div = document.querySelector("#wa-popovers-bucket").parentNode

   if(div){

    cfale1 = true
 if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2")){
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')

     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.x1p5oq8j.x15zmtp0.xwxc41k.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xcigqdy.xfqsd3n.x15jxszr.x191sbug").setAttribute("style",'display:none')
    div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.xbl0rts.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xvl3i4w.xfqsd3n.xzg3blf.x191sbug").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").innerHTML='Use Whats on your computer'
 }
if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v")){
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
    div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.xbl0rts.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xvl3i4w.xfqsd3n.xzg3blf.x191sbug").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").innerHTML='Use Whats on your computer'
 }
       if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank")){
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
    div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xprzwq4.xv2v0i9.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.xk802ri.xc3s5z1.x1iymnnd.x1k33i3r.x7p6r09.x1t5mxou").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
            div.querySelector(".xo1l8bm.x1hql6x6.x13veyf8.x1t8osef.x6k6lpk").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".xo1l8bm.x1hql6x6.x13veyf8.x1t8osef.x6k6lpk").innerHTML='Use Whats on your computer'

 }
if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v")){
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')

     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.x1p5oq8j.x15zmtp0.xwxc41k.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.x18w32sv.xym2i8p.xk3sftt.x1i50ybd").setAttribute("style",'display:none')
    div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.xbl0rts.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xvl3i4w.xfqsd3n.xzg3blf.x191sbug").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").innerHTML='Use Whats on your computer'
 }




   div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[0].style.color = "#06A884";
 div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[1].style.color = "#06A884";

if (div.querySelector("#link-device-phone-number-code-screen-instructions")){
    var pp = div.querySelector("#link-device-phone-number-code-screen-instructions").querySelector(".x1c3i2sq.x1hql6x6")
    pp.innerHTML = pp.innerHTML.replace("WhatsApp", "Whats")
}

if (div.querySelector("#link-device-instructions-list")){
    var aa = div.querySelector("#link-device-instructions-list").querySelector(".x1c3i2sq.x1hql6x6")
    aa.innerHTML = aa.innerHTML.replace("WhatsApp", "Whats")
}





    div.querySelector(".x1lliihq").querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8").setAttribute("style",'flex-grow: 0;padding: 0;margin: 0;')

    div.querySelector(".x1lliihq").parentNode.setAttribute("style",'flex-grow: 0;')
      if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2")){
          div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2").insertAdjacentHTML("afterbegin",
               '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
           );
      }
if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v")){
          div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v").insertAdjacentHTML("afterbegin",
               '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
           );
      }
       if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank")){
          div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank").insertAdjacentHTML("afterbegin",
               '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
           );
      }
       if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v")){
          div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v").insertAdjacentHTML("afterbegin",
               '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
           );
      }


      if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xvi7dlg.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.x849l0f.x1miatn0.xsfy40s.x1gan7if.x1mfogq2.x11z87zs")){
        div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xvi7dlg.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.x849l0f.x1miatn0.xsfy40s.x1gan7if.x1mfogq2.x11z87zs").setAttribute("style",'display:none')
      }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xp1r0qw.xtqikln.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xoky9hv.x2wavl4")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xp1r0qw.xtqikln.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xoky9hv.x2wavl4").remove()
       }

       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xkh2ocl.x12fk4p8.xv54qhq.xwib8y2.xf7dkkf.xp1r0qw.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xkh2ocl.x12fk4p8.xv54qhq.xwib8y2.xf7dkkf.xp1r0qw.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4").remove()
       }

       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d").remove()
       }

     if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl").remove()
       }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x1cy8zhl.x1dzhors.x1yagfhi.x6mdjeo.x1y6sahi")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x1cy8zhl.x1dzhors.x1yagfhi.x6mdjeo.x1y6sahi").remove()
       }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1s85apg.x12k5gve.x1dcwb0m.xob9gl2.x9alx9r.x1m51ek7")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1s85apg.x12k5gve.x1dcwb0m.xob9gl2.x9alx9r.x1m51ek7").remove()
       }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d").remove()
       }

      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1na6gtj.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x6s0dn4.x1y1aw1k").remove()
       div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x78zum5.x1qughib.xkh2ocl.x1cy8zhl.x1q0g3np.xnlzww4.xozqiw3.x198rtga.xxs79tx.x1ewqh72").remove()

       div.querySelector(".x6s0dn4.x1rg5ohu.x16dsc37.xxk0z11").remove()


  }

  },300)



var time2 = setInterval(() => {
   if (document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38")){
          document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38").remove()
      }
   if(!document.getElementsByClassName('_aigw')[1]){
       return
   }

   if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].getElementsByClassName('_aigw')[1]) {

       if(cfale2){

       clearInterval(time2)

      return
    }
      cfale2 = true
       document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                           0]
       .style.minWidth = 'auto'

       if (document.querySelector(".xbyj736")){
           document.querySelector(".xbyj736").style.display = "none";
       }
      if (document.querySelector(".x10l6tqk.x13vifvy.x1o0tod.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl")){
          document.querySelector(".x10l6tqk.x13vifvy.x1o0tod.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl").style.width = '0'
       }

       document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                           0]
       .getElementsByClassName('_aigw')[1].style.minWidth = '100%'
       function querySelectorAllAndHandle(selector, eventType, handler) {
           document.querySelectorAll(selector).forEach(item => {
               item.addEventListener(eventType, handler);
           });
       }
       function setStyle(selector, style) {
           document.querySelectorAll(selector)[1].setAttribute("style", style);
       }
       function handleClickCore(e) {
           setStyle("._aigw.x9f619", 'z-index: 0;position: absolute;width: 100%');
           document.querySelectorAll(".x78zum5.x6s0dn4")[0].addEventListener('click', (e) => {
               setTimeout(() => {
                   handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
                   handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
               }, 300);
           });
           function sendMessage(){
                   console.log('send');
               }
           var time3 = setInterval(() => {

               if (document.querySelector(".x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf")){

                   const button = document.querySelector(".x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf")
                   button.removeEventListener('click', sendMessage);
                   button.addEventListener('click', sendMessage);
           }
           },200)
           if (document.getElementById("backleftid")) {
               document.getElementById("backleftid").remove();
           }
           insertBackLeftDiv();
           document.getElementById("backleftid").addEventListener('click', (e) => {
               setStyle("._aigw.x9f619", 'min-Width: 100%;');
           });

           handleFooterClick();
       }
       function handleDivClick(div) {
           div.addEventListener('click', (e) => {
               document.querySelectorAll("div._aigv._aigw._aigx")[0].setAttribute("style", 'display:none');
               var timer = setInterval(() => {
                   if (document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0]) {
                       document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0].setAttribute("style",'min-width:auto;');
                       clearInterval(timer);
                   }
               }, 300);
           });
       }

       function insertBackLeftDiv() {
           document.getElementById("main").querySelector('header').insertAdjacentHTML("afterbegin",
                                                                                      "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>");
       }

       function handleFooterClick() {
           var foot = document.getElementsByTagName("footer")[0];
           foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
               setTimeout(() => {
                   handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
                   handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
               }, 300);
           });
       }

       function handleBugiwsl0Click(item) {
           item.addEventListener('click', (e) => {
               document.querySelectorAll('._2Ts6i._3RGKj._318SY')[0].setAttribute("style", 'flex:0;');
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1].setAttribute("style", 'flex:0;');
               }
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2].setAttribute("style", 'flex:0;');
               }
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3].setAttribute("style", 'flex:0;');
               }

               var timer = setInterval(() => {
                   if (document.querySelectorAll('.HP5-u')[0]) {
                       document.querySelectorAll('.HP5-u')[0].setAttribute("style",'min-width:auto;');
                       if (document.querySelectorAll('.HP5-u')[1]) {
                           document.querySelectorAll('.HP5-u')[1].setAttribute("style",'min-width:auto;');
                       }
                       if (document.querySelectorAll('.HP5-u')[2]) {
                           document.querySelectorAll('.HP5-u')[2].setAttribute("style",'min-width:auto;');
                       }
                       if (document.querySelectorAll('.HP5-u')[3]) {
                           document.querySelectorAll('.HP5-u')[3].setAttribute("style",'min-width:auto;');
                       }
                   }

                   if (!document.querySelectorAll('.bugiwsl0.fooq7fky')[2]) {
                       clearInterval(timer);
                   }
               }, 300);
           });
       }

       function handleClicks() {
           querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
       }
       handleClicks()
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x6prxxf.xo1l8bm.x1btupbp.xdxn8r.xmuu9lm.x1690sq9.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       });
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       }, 0);
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       }, 1);


       document.querySelector(".x1n2onr6.xh8yej3.lexical-rich-text-input").addEventListener('mouseout', () => {
           setTimeout(handleClicks, 50);
       });
       document.querySelector('div[data-testid="menu-bar-menu"]').addEventListener('click',
                                                                                   (
                                                                                    e) => {
                                                                                        setTimeout(() => {
                                                                                            document.querySelectorAll('._2qR8G._1wMaz._18oo2')[3]
                                                                                            .addEventListener('click', (e) => {
                                                                                                setTimeout(() => {
                                                                                                    document.querySelector('._3J6wB')
                                                                                                    .setAttribute("style",
                                                                                                                  "width:auto;")
                                                                                                    document.querySelector('._3ev9-')
                                                                                                    .setAttribute("style",
                                                                                                                  "min-width:auto;")

                                                                                                    document.querySelector(
                                                                                                                           'div[data-testid="popup-controls-ok"]'
                                                                                                                           ).addEventListener('click', (
                                                                                                                                                        e) => {
                                                                                                                                                        })
                                                                                                }, 300)
                                                                                            })
                                                                                        }, 300)
                                                                                    })



   }
}, 200)
