<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('photo_url')->nullable(false);
            $table->string('city')->nullable(false);
            $table->string('brand')->nullable(false);
            $table->string('model')->nullable(false);
            $table->text('description')->nullable(false);
            $table->integer('year')->nullable(false);
            $table->integer('km')->nullable(false);
            $table->enum('gear', ['auto', 'manual'])->nullable(false);
            $table->string('phone')->nullable(false);
            $table->bigInteger('price')->nullable(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
