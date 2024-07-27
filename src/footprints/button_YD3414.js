module.exports = {
    params: {
        designator: 'RST',
        side: 'F',
        reverse: true,
        from: undefined,
        to: undefined
    },
    body: p => {
        const standard = `
            (module YD-3414 (layer F.Cu) (tedit 60309555)
            ${p.at /* parametric position */}
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 5.25) (layer F.SilkS) ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text value "${p.designator}" (at 0 2.25) (layer F.Fab)
                (effects (font (size 1 1) (thickness 0.15)))
            )
    
            ${'' /* outline */}
            (fp_line (start -3.2 1) (end 3.2 1) (layer Dwgs.User) (width 0.12))
            (fp_line (start -3.2 4.5) (end 3.2 4.5) (layer Dwgs.User) (width 0.12))
            (fp_line (start 3.2 1) (end 3.2 4.5) (layer Dwgs.User) (width 0.12))
            (fp_line (start -3.2 1) (end -3.2 4.5) (layer Dwgs.User) (width 0.12))
            (fp_line (start -1.3 0) (end 1.3 0) (layer Dwgs.User) (width 0.12))
            (fp_line (start 1.3 1) (end 1.3 0) (layer Dwgs.User) (width 0.12))
            (fp_line (start -1.3 1) (end -1.3 0) (layer Dwgs.User) (width 0.12))
        `
        
        function pins(def_neg, def_pos, def_side) {
            return `
                ${'' /* pins */}
                (pad 1 smd rect (at ${def_pos}2.375 1.9 ${p.r}) (size 2.25 1.2) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.from})
                (pad 2 smd rect (at ${def_pos}2.375 3.6 ${p.r}) (size 2.25 1.2) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to})
                (pad 2 smd rect (at ${def_neg}2.375 3.6 ${p.r}) (size 2.25 1.2) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to})
                (pad 1 smd rect (at ${def_neg}2.375 1.9 ${p.r}) (size 2.25 1.2) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.from})

                (pad "" thru_hole circle (at 2.375 1.9) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.from})
                (pad "" thru_hole circle (at 2.375 3.6) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.to})
                
                (pad M1 thru_hole circle (at 0 1.375) (size 0.75 0.75) (drill 0.75) (layers *.Cu *.Mask))
                (pad M1 thru_hole circle (at 0 4.125) (size 0.75 0.75) (drill 0.75) (layers *.Cu *.Mask))
            `
        }
        
        if(p.reverse) {
            return `
            ${standard}
            ${pins('-', '', 'F')}
            ${pins('', '-', 'B')})
            `
        } else {
            return `
            ${standard}
            ${pins('-', '', p.side)})
            `
        }
    }
}
