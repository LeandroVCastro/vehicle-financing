<?php

namespace App\Http\Controllers;

use App\Services\Vehicle\ListVehiclesFactory;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function listAll(Request $request)
    {
        try {
            $listVehiclesServices = ListVehiclesFactory::make();
            $vehicles = $listVehiclesServices->handle();
            return response()->json($vehicles, 200);
        } catch (\Throwable $th) {
            return response()->json('Erro no servidor: ' . $th->getMessage(), 500);
        }
    }
}
