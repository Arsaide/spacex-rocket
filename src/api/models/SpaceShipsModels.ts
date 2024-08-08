export interface SpaceShipModel {
    height: {
        meters: number,
        feet: number
    },
    diameter: {
        meters: number,
        feet: number
    },
    mass: {
        kg: number,
        lb: number
    },
    first_stage: {
        thrust_sea_level: {
            kN: number,
            lbf: number
        },
        thrust_vacuum: {
            kN: number,
            lbf: number
        },
        reusable: boolean,
        engines: number,
        fuel_amount_tons: number,
        burn_time_sec: number
    },
    second_stage: {
        thrust: {
            kN: number,
            lbf: number
        },
        payloads: {
            composite_fairing: {
                height: {
                    meters: number,
                    feet: number
                },
                diameter: {
                    meters: number,
                    feet: number
                }
            },
            option_1: string
        },
        reusable: boolean,
        engines: number,
        fuel_amount_tons: number,
        burn_time_sec: number
    },
    engines: {
        isp: {
            sea_level: number,
            vacuum: number
        },
        thrust_sea_level: {
            kN: number,
            lbf: number
        },
        thrust_vacuum: {
            kN: number,
            lbf: number
        },
        number: number,
        type: string,
        version: string,
        layout: string,
        engine_loss_max: number,
        propellant_1: string,
        propellant_2: string,
        thrust_to_weight: number
    },
    landing_legs: {
        number: number,
        material: string
    },
    payload_weights: Array<{
        id: string,
        name: string,
        kg: number,
        lb: number
    }>,
    flickr_images: string[],
    name: string,
    type: string,
    active: boolean,
    stages: number,
    boosters: number,
    cost_per_launch: number,
    success_rate_pct: number,
    first_flight: string,
    country: string,
    company: string,
    wikipedia: string,
    description: string,
    id: string
}