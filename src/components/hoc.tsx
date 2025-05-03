import React from "react";

interface PermissionProps {
  allowedRoles: string[]; // Roles permitidos para ver este componente
  userRole: string; // Rol actual del usuario
}

const withPermission = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & PermissionProps> => ({ allowedRoles, userRole, ...props }) => {
  // Mostrar solo si el usuario tiene el rol permitido
  if (!allowedRoles.includes(userRole)) {
    return null; // Retornar nada si no está permitido
  }

  return <Component {...(props as P)} />;
};

export default withPermission;