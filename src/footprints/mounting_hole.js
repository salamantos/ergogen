module.exports = {
    params: {
        diam: 5.5,
    },
    body: p => 
    // `
    // (module Button_Switch_SMD:SW_SPDT_PCM12 (layer F.Cu) (tedit 5A02FC95)
    //     ${p.at /* parametric position */}
    //     (descr "Ultraminiature Surface Mount Slide Switch, right-angle, https://www.ckswitches.com/media/1424/pcm.pdf")
    //     (attr smd)
    //     (pad "" np_thru_hole circle (at -1.5 0.33 ${p.r}) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))
    //     (pad "" np_thru_hole circle (at 0 0) (size ${p.diam} ${p.diam}) (drill ${p.diam}) (layers "*.Cu" "*.Mask"))
        
    // )
    // `
    `
        (module "MountingHole_${p.diam}mm" (layer "F.Cu") (tedit 1A02FC95)
            ${p.at /* parametric position */}
            (descr "Mounting Hole ${p.diam}mm, no annular")
            (fp_text reference "${p.diam}mm" (at 0 5.25) (layer F.SilkS) ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (pad "" np_thru_hole circle (at 0 0) (size ${p.diam} ${p.diam}) (drill ${p.diam}) (layers "*.Cu" "*.Mask"))
        )
    `
}
