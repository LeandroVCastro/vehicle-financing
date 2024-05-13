<?php

namespace App\Services\Vehicle;

use App\Models\Vehicle;

class ListVehiclesService
{

    private $vehicleModel;

    public function __construct(Vehicle $vehicleModel)
    {
        $this->vehicleModel = $vehicleModel;
    }

    public function handle()
    {
        try {
            $vehicles = $this->vehicleModel->listAll();
            return $vehicles;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
