class SolutionsController < ApplicationController
  def create
 # Obtenemos la problematic
  @problematic = Problematic.find(params[:problematic_id])
  #Ahora creamos la idea dentro de la problematica
  @idea = @problematic.solution.create(solution_params)

  redirect_to problematic_path(@problematic)
  end

  private
    def solution_params
      params.require(:solution).permit(:autor_sol, :contenido_sol)

    end
end
