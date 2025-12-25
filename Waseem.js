
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
               "<img class='_akaz' style='width:64px;z-index:5;' src='data:image/png;base64,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'/>"
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
    // 获取第一个匹配的按钮
//    var button = document.querySelector('button:contains("Continue to WhatsApp Web")');
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === "Continue to WhatsApp Web" || buttons[i].textContent === "继续前往 WhatsApp 网页版" ) {
            // 找到匹配的按钮
            var button = buttons[i];
            button.click();
            break; // 如果只需要找到第一个匹配的按钮，可以使用break跳出循环
        }
    }
    
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
