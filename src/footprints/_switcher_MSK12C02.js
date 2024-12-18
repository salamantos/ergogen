module.exports = {
    params: {
        designator: 'SW',
        side: 'F',
        from: undefined,
        to: undefined
    },
    body: p => `
    
    (module "MSK12C02" (layer F.Cu)
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (descr "MSK12C02-1")
        (tags "Switch")
        (fp_text reference "${p.ref}" (at 0.000 -1) (layer F.SilkS)
            (effects (font (size 1 1) (thickness 0.254)))
        )
        (fp_text value "${p.designator}" (at 0.000 -1) (layer F.SilkS) hide
            (effects (font (size 1 1) (thickness 0.254)))
        )

        ${'' /* outline */}
        (fp_line (start -3.15 1.35) (end 3.15 1.35) (layer F.Fab) (width 0.2))
        (fp_line (start 3.15 1.35) (end 3.15 -1.35) (layer F.Fab) (width 0.2))
        (fp_line (start 3.15 -1.35) (end -3.15 -1.35) (layer F.Fab) (width 0.2))
        (fp_line (start -3.15 -1.35) (end -3.15 1.35) (layer F.Fab) (width 0.2))
        (fp_line (start -2.5 1.35) (end 2.5 1.35) (layer F.SilkS) (width 0.1))
        (fp_line (start 2.5 1.35) (end 2.5 1.35) (layer F.SilkS) (width 0.1))
        (fp_line (start 2.5 1.35) (end -2.5 1.35) (layer F.SilkS) (width 0.1))
        (fp_line (start -2.5 1.35) (end -2.5 1.35) (layer F.SilkS) (width 0.1))
        (fp_line (start -1.25 -1.35) (end -0.25 -1.35) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.25 -1.35) (end -0.25 -1.35) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.25 -1.35) (end -1.25 -1.35) (layer F.SilkS) (width 0.1))
        (fp_line (start -1.25 -1.35) (end -1.25 -1.35) (layer F.SilkS) (width 0.1))
        (fp_line (start -3.15 -0.25) (end -3.15 -0.25) (layer F.SilkS) (width 0.1))
        (fp_line (start -3.15 -0.25) (end -3.15 0.25) (layer F.SilkS) (width 0.1))
        (fp_line (start -3.15 0.25) (end -3.15 0.25) (layer F.SilkS) (width 0.1))
        (fp_line (start -3.15 0.25) (end -3.15 -0.25) (layer F.SilkS) (width 0.1))
        (fp_line (start 3.15 -0.25) (end 3.15 -0.25) (layer F.SilkS) (width 0.1))
        (fp_line (start 3.15 -0.25) (end 3.15 0.25) (layer F.SilkS) (width 0.1))
        (fp_line (start 3.15 0.25) (end 3.15 0.25) (layer F.SilkS) (width 0.1))
        (fp_line (start 3.15 0.25) (end 3.15 -0.25) (layer F.SilkS) (width 0.1))
        (fp_line (start -4.85 -4.35) (end 4.85 -4.35) (layer F.CrtYd) (width 0.1))
        (fp_line (start 4.85 -4.35) (end 4.85 2.35) (layer F.CrtYd) (width 0.1))
        (fp_line (start 4.85 2.35) (end -4.85 2.35) (layer F.CrtYd) (width 0.1))
        (fp_line (start -4.85 2.35) (end -4.85 -4.35) (layer F.CrtYd) (width 0.1))
        (fp_line (start -2.5 -3.3) (end -2.5 -3.3) (layer F.SilkS) (width 0.2))
        (fp_line (start -2.4 -3.3) (end -2.4 -3.3) (layer F.SilkS) (width 0.2))
        (fp_line (start -2.5 -3.3) (end -2.5 -3.3) (layer F.SilkS) (width 0.2))
        (fp_arc (start -2.45 -3.3) (end -2.500 -3.3) (angle -180) (layer F.SilkS) (width 0.2))
        (fp_arc (start -2.45 -3.3) (end -2.400 -3.3) (angle -180) (layer F.SilkS) (width 0.2))
        (fp_arc (start -2.45 -3.3) (end -2.500 -3.3) (angle -180) (layer F.SilkS) (width 0.2))
        
        ${'' /* pins */}
        (pad A1 smd rect (at -2.250 -1.85 ${p.r}) (size 0.500 1.000) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.from})
        (pad B1 smd rect (at 0.750 -1.85 ${p.r}) (size 0.500 1.000) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.to})
        (pad C1 smd rect (at 2.250 -1.85 ${p.r}) (size 0.500 1.000) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (pad MH1 np_thru_hole circle (at -1.500 ${p.r}) (size 0.85 0.85) (drill 0.85) (layers *.Cu *.Mask))
        (pad MH2 np_thru_hole circle (at 1.500 ${p.r}) (size 0.85 0.85) (drill 0.85) (layers *.Cu *.Mask))
        (pad MP1 smd rect (at 3.450 -1.05 ${p.r + 90}) (size 0.500 0.800) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (pad MP2 smd rect (at 3.450 1.05 ${p.r + 90}) (size 0.500 0.800) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (pad MP3 smd rect (at -3.450 1.05 ${p.r + 90}) (size 0.500 0.800) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (pad MP4 smd rect (at -3.450 -1.05 ${p.r + 90}) (size 0.500 0.800) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (model MSK12C02.stp
            (at (xyz 0.0019685039663409 -0.0039370079326817 0.026771653824904))
            (scale (xyz 1 1 1))
            (rotate (xyz 90 -180 -180))
        )
    )
    
    `
}
