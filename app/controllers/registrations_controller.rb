class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(:nombre_us, :apellido_us, :location_id, :email, :password, :password_confirmation, :roll)
  end

  def account_update_params
    params.require(:user).permit(:nombre_us, :apellido_us, :location_id, :email, :password, :password_confirmation, :current_password)
  end
end
