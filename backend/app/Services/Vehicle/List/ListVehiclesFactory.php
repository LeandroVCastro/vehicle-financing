<?php

namespace App\Services\Vehicle;

use App\Models\Vehicle;

class ListVehiclesFactory
{
    public static function make()
    {
        return new ListVehiclesService(new Vehicle());
    }
}
