<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Vehicle;
use App\Services\Vehicle\ListVehiclesService;

class ListVehiclesTest extends TestCase
{
    protected Vehicle $vehicleModelMock;
    protected $listVehiclesService;
    protected $exampleVehicles;

    public function setUp(): void
    {
        parent::setUp();

        $this->vehicleModelMock = $this->getMockBuilder(Vehicle::class)
            ->disableOriginalConstructor()
            ->getMock();
        $this->listVehiclesService = new ListVehiclesService($this->vehicleModelMock);
    }

    public function testHandleMethodReturnsListOfVehicles()
    {
        $this->exampleVehicles = [
            ['id' => 1, 'name' => 'Vehicle 1'],
            ['id' => 2, 'name' => 'Vehicle 2'],
            ['id' => 3, 'name' => 'Vehicle 3'],
        ];
        $this->vehicleModelMock->expects($this->once())
            ->method('listAll')
            ->willReturn($this->exampleVehicles);
        $vehicles = $this->listVehiclesService->handle();
        $this->assertEquals($this->exampleVehicles, $vehicles);
    }

    public function testHandleMethodThrowsException()
    {
        $this->vehicleModelMock->expects($this->once())
            ->method('listAll')
            ->willThrowException(new \Exception('Error'));
        $this->expectException(\Exception::class);
        $this->listVehiclesService->handle();
    }
}
